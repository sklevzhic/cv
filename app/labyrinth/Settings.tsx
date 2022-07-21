import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setNewGame, setSize} from '../../store/slices/labyrinthSlice';
import {RootState} from "../../store";

interface SettingsProps {

}

export const Settings: React.FC<SettingsProps> = () => {
    let dispatch = useDispatch()
    let size = useSelector((state: RootState) => state.labyrinth.size)
    const handleNewGame = () => {
        dispatch(setNewGame())
    }

    return <>
        <h2 className={"border-b text-center text-3xl p-2"}>Игра</h2>

        <div className={"text-xl p-2"}>
            <p>В начале игры в случайную ячейку помещаем маркер. Далее генерируются 10 «ходов» (возможные варианты «вверх»,
                «влево», «вниз», «вправо»). Игрок должен в уме «пройти» по этим ходам по лабиринту и указать конечную точку
                маркера.</p>
            <p>
                После ответа (клик на ячейку) идет проверка ответа и предоставляется возможность начать новую игру
                (например, по клику на кнопку «Далее»). Если ответ введен неправильно - указать правильный ответ.
            </p>
        </div>

        <div className={"border flex flex-col p-3"}>
            <div className={"text-2xl"}>
                Начать новую игру
            </div>
            <div className={"flex items-center"}>
                <div className={"basis-1/2 shrink-0"}>
                    <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Введите размер сетки</label>
                    <input type="number" id="size" min={3} max={20}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                           focus:border-blue-500 block w-full p-2.5"
                           placeholder="" value={size} onChange={(e) => dispatch(setSize(+e.currentTarget.value))} />
                </div>
                <div className={"basis-1/2 shrink-0 text-center"}>
                    <button
                        className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 " +
                            "font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}
                        onClick={handleNewGame}>NewGame</button>
                </div>
            </div>

        </div>


    </>;
};