import React, { ChangeEvent, useState, useEffect } from "react";
import { ICloseAproachData, IListAsteroids } from "../interface/spreadSheet";


interface RowSheetProps {
    id: number,
    listOfAsteroids: IListAsteroids,
    closeAproachData: ICloseAproachData
}

const RowSheet = ({ id, listOfAsteroids, closeAproachData }: RowSheetProps) => {
    const [userComment, setUserComment] = useState("");
    const [hideInput, setHideInput] = useState(false);

    /**
     * 
     * @param e means the event 
     * @param userInput the  input of the user
     */
    const addCommentByEnter = (e: React.KeyboardEvent, userInput: string) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setUserComment(userInput)
            setHideInput(true)
        }
    }
    return (<>
        <tr key={id}>
            <td>{listOfAsteroids.id}</td>
            <td>{listOfAsteroids.name}</td>
            <td>{Math.round(listOfAsteroids.estimated_diameter)}</td>
            <td>{closeAproachData.close_approach_date_full}</td>
            <td>{closeAproachData.miss_distance.kilometers}</td>
            <td>{closeAproachData.relative_velocity.kilometers_per_hour}</td>
            <td>{!hideInput ? <input placeholder="user comment" value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                onKeyUp={(e) => addCommentByEnter(e, userComment)}
            /> : userComment}</td>
        </tr>
    </>)
}
export default RowSheet;