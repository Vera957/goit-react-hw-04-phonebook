import styled from "styled-components"

export const StyledLabel = styled.label`
    margin-bottom: ${p => p.theme.space[2]}px;
    display: flex;
    align-items: center;
`

export const StyledInput = styled.input`
    display: flex;
    border-radius: ${p => p.theme.radii.normal};
    margin-left: auto;
    outline: none;
    padding: ${p => p.theme.space[2]}px;
`
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    background: ${p => p.theme.colors.white};
    padding: ${p => p.theme.space[4]}px;
    margin: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal};
    //align-items: center;
`

export const Button = styled.button`
    background: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[1]}px;
    outline: none;
    border: none;
    color: ${p => p.theme.colors.white};
    max-width: 100px;
    align-self: flex-end;
    &:hover, &:focus{
        transform: scale(1.1);
    }
`
