import { IListAsteroids } from "../interface/spreadSheet";
import "./SpreadSheet.css";
import Table from 'react-bootstrap/Table';
import "react-datepicker/dist/react-datepicker.css";
import RowSheet from "../components/RowSheet"

interface SpreadSheetProps {
    listOfAsteroids: IListAsteroids[]
}

const SpreadSheet = ({ listOfAsteroids }: SpreadSheetProps) => {
    return (
        <>
            <div className="table-container">
                <Table striped={true} bordered={true} hover={true}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Estimated diameter</th>
                            <th>Full date</th>
                            <th>Miss Distance</th>
                            <th>Velocity</th>
                            <th>User comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOfAsteroids.map((l, il) => l.close_approach.map((c, ic) => {
                            return (<RowSheet id={il} listOfAsteroids={l} closeAproachData={c} />)
                        })
                        )}
                    </tbody>
                </Table>
            </div>
        </>)
}
export default SpreadSheet