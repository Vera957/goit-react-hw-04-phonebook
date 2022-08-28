import { StyledInputTwo } from "style/style";

export const Field2 = (props) => {
    console.log(props.onChange)
    return (<>
        <h2>Search by name</h2>
        <form>
            <StyledInputTwo
                type="text"
                placeholder="Search"
                name="filter"
                id='searchName'
                onChange={(e) => props.onChange(e.target.value)}
            />
        </form>
    </>)

}