import { styled } from "styled-components";

export const NavbarStyledDiv = styled.div`

    .grid-align{
        border-bottom: 1px solid gray;
        display: grid;
        grid-template-columns: 65% 15% 16%;
        grid-gap: 2%;
        align-items: center;
        .logo{
            display: flex;
            align-items: end;
            padding-left: 2%;
            span{
                margin-left: 1%;
            }
            img{
                width: 4%;
            }
        }
        input{
            padding:4%;
            border-radius: 5px;
        }
        .button-1{
            background:#f8ee84;
            color:black;
            width: 100%;
        }
    }

    @media (max-width:1280px) {
        .grid-align{
            grid-template-columns: 60% 18% 18%;

        }
    }
    @media (max-width:1080px) {
        .grid-align{
            grid-template-columns: 50% 20% 23%;

        }
    }
    @media (max-width:900px) {
        .grid-align{
            grid-template-columns: 35% 30% 28%;

            .logo{
                img{
                    width: 15%;
                }
            }
        }
    }
    @media (max-width:520px) {
        .grid-align{
            grid-template-columns: 100%;
            grid-gap: 0;

            .logo{
                justify-content: center;
                img{
                    width: 10%;
                }
            }
            input{
                width: 80%;
                margin: auto;
                padding: 3%;
                margin-bottom: 4%;

            }
            .button-1{
                width: 80%;
                margin: auto;
                margin-bottom: 4%;
                margin-top: 4%;

            }

        }
    }

`