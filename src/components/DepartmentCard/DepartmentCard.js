import "./DepartmentCard.scss"
export const DepartmentCard = ({obj}) => {
    return <>
        <a className="department-card" href={obj.link} target="blank">
            {obj.title}
        </a>
    </>
}
