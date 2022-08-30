import './category.css'
import BackArrow from "../../../../../../assets/back_arrow"
import { CategoryType } from '../../../../../../interfaces/category'
import { Link } from 'react-router-dom'

interface Props {
    categories: CategoryType
    categoryBoxRef: React.RefObject<HTMLDivElement>
    setCategoryClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Category({ categories, categoryBoxRef, setCategoryClicked }: Props) {
    return (
        <>
            <div ref={categoryBoxRef} className='filter_box scroll' > 
                <BackArrow setFilterClicked={ setCategoryClicked }/>
                { categories.map((category, index) => <><Link key={index + 1} to={`./category/${category}`} className="categories">{category}</Link></>) }
            </div>
        </>
    )
}