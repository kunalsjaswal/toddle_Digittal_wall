import { styled } from "styled-components";

const AddBoardDiv= styled.div`
    .add-task{
        margin-top: 2%;
        width: 200px;
        margin-right: 15px;
        margin-bottom: 15px;
        height: 200px;
        border-radius: 10px;
        text-align: center;
        border: 4px solid #4e69d2;
        cursor: pointer;        
        transition: 0.2s;
        background: white;


        .add-symb{
            width: 50%;
            margin-top: 25%;
        }
        h4{
            color: #4e69d2;
        }


    }
    .add-task:hover{
        box-shadow: 0px 0px 4px #d1cfcf;
    }

    .new-board-menu{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: none;

        .close-window{
            background-color: #1e1e1e81;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            
        }
        .inner-content{
            position: fixed;
            top: 20%;
            width: 450px;
            height: 400px;
            left: 38%;
            background-color: white;
            box-shadow: 0px 0px 2px black;
            border-radius: 10px;
            animation: anim-2 0.3s ease-out 0s 1;
            .head{
                padding: 2%;
                padding-top: 4%;
                h3{
                    margin: 0;
                    padding-left: 5%;
                }
                display: grid;
                grid-template-columns: 90% 10%;
                align-items: center;
            }
            .body{
                .textfield-1{
                    width: 90%;
                    margin-left: 5%;
                    margin-top: 2%;
                }
                h4{
                    padding-left: 6%;
                    margin-top: 8%;
                }
                .corousel{
                    display: flex;
                    width: 90%;
                    margin: auto;
                    overflow: auto;

                    img{
                        width: 30%;
                        border-radius: 5px;
                        margin-right: 2%;
                        cursor: pointer;
                        transition: 0.3s;
                    }

                }
                ::-webkit-scrollbar {
                    width: 2px;
                    height: 0px;
                }

            }
            .footer{
                .btn-2{
                    margin-left: 62%;
                    margin-top: 10%;
                }
            }
        }

        @keyframes anim-2 {
            0%{
                scale: 0.5;
            }
            100%{
                scale: 1;
            }
        }
    }

    @media (max-width:1280px){
        .new-board-menu{
            .inner-content{
                left: 32%;
            }
        }
    }
    @media (max-width:1080px){
        .new-board-menu{
            .inner-content{
                left: 30%;
            }
        }
    }
    @media (max-width:900px){
        .new-board-menu{
            .inner-content{
                left: 20%;
                height: 450px;
            }
        }
    }

    @media (max-width:520px) {
        
        .add-task{
            width: 300px;
            height: 300px;
            margin: auto;

            h4{
                font-size: 5vw;
            }
        }
        .new-board-menu{
            .inner-content{
                left: 5%;
                width: 370px;
                height: 450px;
                .body{
                    .corousel{
                        img{
                            width: 40%;
                        }
                    }
                }
                .footer{
                    
                    .btn-2{
                        margin-top: 25%;
                        margin-left: 55%;
                    }
                }
            }
        }
    }
    


`
export default AddBoardDiv