import { styled } from "styled-components";

const BoardDivStyle = styled.div`
.container{
    position: relative;
    h1{
        padding-left: 2%;
    }
    .bgimg{
        position: fixed;
        width: 30%;
        right: 0;
        bottom: 5%;
        transform: scaleX(-1);
        filter: drop-shadow(2px 2px 2px gray);
        animation: anim-1 6s ease-in-out 0s infinite;
        z-index: -1;
    }

    section.boards{
        display: flex;
        flex-wrap: wrap;
        width: 96%;
        margin: auto;
    }
}
    @keyframes anim-1 {
        0%{
            bottom: 2%;
            transform: scaleX(-1) rotate(0deg);
        }
        50%{
            bottom: 5%;
            transform:scaleX(-1)  rotate(5deg);


        }
        100%{
            bottom: 2%;
            transform:scaleX(-1)  rotate(0deg);

        }
    }

    @media (max-width:900px) {
        .container{
            .bgimg{
                width: 60%;
                right: 0;
                
            }

        }
    }

    @media (max-width:520px) {
        .container{
            h1{
                text-align: center;
            }
            section.boards{
                display: block;
            }
        }
    }
`

export default BoardDivStyle