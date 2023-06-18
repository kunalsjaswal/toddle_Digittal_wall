import { styled } from "styled-components";

export const CardDiv = styled.div`
    .card{
        margin-top: 2%;
        position: relative;
        width: 200px;
        margin-right: 15px;
        margin-bottom: 15px;
        height: 200px;
        border-radius: 10px;
        text-align: center;
        border: 4px solid black;
        transition: 0.2s;
        background: white;

        h4{
            display:grid;
            grid-template-columns: 85% 15%;
        }
        .option{
            position:absolute;
            width: 100px;
            height: 70px;
            right: -45%;
            top: 20%;
            background-color: white;
            border-radius: 5px;
            box-shadow: -1px 2px 2px gray;
            display: none;
            animation: anim-3 0.2s ease-out 0s 1;
            z-index: 5;
        }
        @keyframes anim-3 {
            0%{
                scale: 0.7;
            }
            100%{
                scale: 1;
            }
        }
        img{
            width: 90%;
            border-radius: 5px;
            height: 63%;
            cursor: pointer;        

        }
    }
    
`