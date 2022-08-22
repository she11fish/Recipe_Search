import './area.css'
import BackArrow from "../../../../../assets/back_arrow"
import AreaType from '../../../../../interfaces/area'

interface Props {
    areas: AreaType[]
    setAreaClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Area({ areas, setAreaClicked }: Props) {
    return (
        <>
            <div className='filter_box scroll'> 
                <BackArrow setFilterClicked={ setAreaClicked }/>
                { areas.map(area => <><div key={area.id} className="areas">{area.name}</div></>) }
            </div>
        </>
    )
}