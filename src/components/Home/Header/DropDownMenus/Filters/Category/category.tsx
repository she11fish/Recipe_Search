import './category.css'
import BackArrow from "../../../../../../assets/back_arrow"
import { CategoryType } from '../../../../../../interfaces/types'
import { Link } from 'react-router-dom'

interface Props {
    categories: CategoryType
    categoryBoxRef: React.RefObject<HTMLDivElement>
    setCategoryClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Category({ categories, categoryBoxRef, setCategoryClicked }: Props) {
    return (
        <>
            <div ref={categoryBoxRef} className='filter-box scroll' > 
                <BackArrow setFilterClicked={ setCategoryClicked }/>
                <div className='container'>
                    { categories.map((category, index) => <><Link key={index + 1} to={`./category/${category}`} className="categories">{category}</Link></>) }
                </div>
            </div>
        </>
    )
}