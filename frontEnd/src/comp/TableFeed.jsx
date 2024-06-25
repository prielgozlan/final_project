import React from 'react'
import "../Css_for_comp/TableFeed.css"
import { AiFillLike} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";


const TableFeed = ({setTokem}) => {

    









    return (
        <div className='box_t_f'>
            <div className='box_t_f_1'>
                <div className='row'>
                    <div className='col-4 img1'>
                        <img src="" />
                    </div>
                    <div className='col-5 mt-4'>
                        <h4>priel gozlan</h4>
                        <p>20.3.2024</p>
                    </div>
                    <div className='col-3 box_t_f_b'>
                    {setTokem.istoken ? <button> הצעת חברות</button>:null}
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odit cupiditate maxime saepe quos necessitatibus aliquid, voluptates tempore eligendi at ut earum, enim nobis vel. Natus vitae quibusdam nobis aspernatur iste tempore maiores accusamus. Fugit quisquam architecto rem nisi, nemo ipsam sequi voluptate beatae est earum! Atque quis dolorum cum optio ratione error laudantium maxime quaerat culpa iste illo ex quod quidem autem deserunt cumque inventore voluptas eum, veniam totam? Perspiciatis amet vel cum voluptatem labore laudantium quidem et eius aliquam odio? Hic repudiandae quaerat dolor beatae modi consequatur sequi eos ducimus nulla aspernatur perspiciatis unde, amet quidem ullam fugit!</p>
                <div className='row'>
                <div className='box_icon col-2'>
                    <button><FcLike/></button>
                    <p>0</p>
                </div>
                <div className='box_icon col-2'>
                    <button><AiFillLike/></button>
                    <p>0</p>
                </div>
                <div className='box_icon col-2'>
                    <button><FaRegFaceKissWinkHeart/></button>
                    <p>0</p>
                </div>
                </div>

            </div>
            <div className='box_t_f_1'>
                <div className='row'>
                    <div className='col-4 img1'>
                        <img src="" />
                    </div>
                    <div className='col-5 mt-4'>
                        <h4>priel gozlan</h4>
                        <p>20.3.2024</p>
                    </div>
                    <div className='col-3 box_t_f_b'>
                        {setTokem.istoken ? <button> הצעת חברות</button>:null}
                        
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odit cupiditate maxime saepe quos necessitatibus aliquid, voluptates tempore eligendi at ut earum, enim nobis vel. Natus vitae quibusdam nobis aspernatur iste tempore maiores accusamus. Fugit quisquam architecto rem nisi, nemo ipsam sequi voluptate beatae est earum! Atque quis dolorum cum optio ratione error laudantium maxime quaerat culpa iste illo ex quod quidem autem deserunt cumque inventore voluptas eum, veniam totam? Perspiciatis amet vel cum voluptatem labore laudantium quidem et eius aliquam odio? Hic repudiandae quaerat dolor beatae modi consequatur sequi eos ducimus nulla aspernatur perspiciatis unde, amet quidem ullam fugit!</p>
                <div className='row'>
                <div className='box_icon col-2'>
                    <button><FcLike/></button>
                    <p>0</p>
                </div>
                <div className='box_icon col-2'>
                    <button><AiFillLike/></button>
                    <p>0</p>
                </div>
                <div className='box_icon col-2'>
                    <button><FaRegFaceKissWinkHeart/></button>
                    <p>0</p>
                </div>
                </div>

            </div>






        </div>
    )
}

export default TableFeed