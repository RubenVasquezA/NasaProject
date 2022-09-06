import React, { useState } from 'react';
import axios from "axios";
import { INearEarthObjects, IListAsteroids } from "../interface/spreadSheet";
import SpreadSheet from "./SpreadSheet"
import ReactPaginate from 'react-paginate';
import DatePicker from "react-datepicker";
import './Asteroid.css';
const baseURL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Wuzq7fDPVVD3FNEVmeh44POdwHDwsKbgigQdYKIr";

const PER_PAGE = 1;

const Asteroid = () => {
    const [listOfAsteroids, setListOfAsteroids] = useState<Array<IListAsteroids>>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    React.useEffect(() => {
        getAsteroids()
    }, []);

    /** 
     * getAsteroids allows to make the fetch and obtain the information from the server
    */
    async function getAsteroids() {
        try {
            axios.get(baseURL).then((response) => {
                let near_earth_objects: INearEarthObjects[] = response.data.near_earth_objects
                // we build the prototype...
                let newListOfAsteroids: IListAsteroids[] = near_earth_objects.map((o) => {
                    return {
                        id: o.id,
                        name: o.name,
                        close_approach: o.close_approach_data,
                        estimated_diameter: o.estimated_diameter.kilometers.estimated_diameter_max,
                        potential_hazardous: o.is_potentially_hazardous_asteroid
                    }
                })

                setListOfAsteroids([...newListOfAsteroids])
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    function handlePageClick(selectedItem: {
        selected: number;
    }) {
        setCurrentPage(selectedItem.selected)
    }

    const offset = currentPage * PER_PAGE;

    const currentListAsteroids = listOfAsteroids.slice(offset, offset + PER_PAGE)

    const pageCount = Math.ceil(listOfAsteroids.length / PER_PAGE);

    return (<div className='asteroid-container'>
        <div className="date-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" />
            Start Date: <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            End Date: <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} />
        </div>
        {currentListAsteroids && <SpreadSheet listOfAsteroids={currentListAsteroids} />}
        <div className='paginate-container'>
            <ReactPaginate
                previousLabel={"<- Previous"}
                nextLabel={"Next ->"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>
    </div>)
}
export default Asteroid