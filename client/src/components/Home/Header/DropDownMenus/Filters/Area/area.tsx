import './area.css'
import BackArrow from "../../../../../../assets/back_arrow"
import AreaType from '../../../../../../interfaces/area'
import { Link } from 'react-router-dom'

interface Props {
    areas: AreaType[]
    setAreaClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Area({ areas, setAreaClicked }: Props) {
    return (
        <>
            <div className='filter_box scroll'> 
                <BackArrow setFilterClicked={ setAreaClicked }/>
                { areas.map(area => <><Link key={area.id} to={`./area/${area.name}`} className="areas">{area.name}</Link></>) }
            </div>
        </>
    )
}