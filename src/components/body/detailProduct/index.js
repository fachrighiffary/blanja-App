/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Row, Button,Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BigStar, Star } from '../../../assets'
import Rating from '../../moleculs/rating'
import './detailProduct.css'
import Select from 'react-select'

import {connect} from 'react-redux'

import {
    addCounterCreator,
    subCounterCreator
} from '../../../redux/actionCreators/Counter'

class DetailProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            product_name: this.props.product_name,
            product_color: this.props.product_color,
            product_size: this.props.product_size,
            size : '',
            color: '',
            qty : '',
            smShow: false
        }
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }
    handleClick = (result) => {
       this.setState({
           color: result
       })
    }

    handleSubmit = () => {
        if(this.state.color === '' && this.state.size === ''){
            this.setState({
                smShow: true
            })
        }else{
            alert('oke next')
        }
    }
    
    render() {
        const {product_name, product_color, product_img, product_desc, total_rating, product_price, product_size, product_qty, store_name,product_condition, index} = this.props
        const {smShow} = this.state
        const { counterNumber} = this.props.counter

        const options = product_size.split(',').map((result) => {
            return { value: result, label: result.toUpperCase() }
        })
        return (
            <>
            <Row className="d-flex" key={index}>
                <div>
                    <div className="img">
                        <img  className="img-fit"  width="378px"  src={process.env.REACT_APP_BASEURL + product_img.split(',')[0]}/>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <div className="dtl-img">
                            <img className="img-dtl" src={process.env.REACT_APP_BASEURL + product_img.split(',')[0]} />
                        </div>
                        <div className="dtl-img">
                            <img className="img-dtl" src={process.env.REACT_APP_BASEURL + product_img.split(',')[1]} /> 
                        </div>
                        <div className="dtl-img">
                            <img className="img-dtl" src={process.env.REACT_APP_BASEURL + product_img.split(',')[2]} />
                        </div>
                        <div className="dtl-img">
                            <img className="img-dtl" src={process.env.REACT_APP_BASEURL + product_img.split(',')[3]} /> 
                        </div>
                        <div className="dtl-img">
                            <img className="img-dtl" src={process.env.REACT_APP_BASEURL + product_img.split(',')[4]} />
                        </div>
                    </div>
                </div>
                
                <div className="dtl-prdct">
                    <p className="txt-name">{product_name}</p>
                    <p className="txt-brand text-muted">{store_name}</p>
                    <Rating total_rating={Math.round(total_rating)} />
                    <p className="txt-brand text-muted mt-2">Price</p>
                    <h2>Rp. {product_price}</h2>
                    <p className="mt-4" style={{fontSize:"16px", fontWeight:"bold"}} >Color</p>
                    <Row className="justify-content-start ml-1" style={{width:'400px'}}>
                        {product_color.split(',').map((result, index) => {
                            return (
                                <Button key={index} variant="link" onClick={() => this.handleClick(result)} >
                                    <div className="clr-dtl" style={{backgroundColor: result}}></div>
                                </Button>
                            )
                        })}
                    </Row>
                    <div className="d-flex mt-4 justify-content-around" style={{height:'80px', width:'380px'}}>
                        <div style={{width:'150px'}}>
                            <p style={{fontSize:"16px", fontWeight:'bold'}}>Size</p>
                             <Select 
                             options={options} 
                             placeholder="Select Size" 
                             name="size" 
                             onChange={item => this.setState({
                                size: item.value
                            })}
                             />
                        </div>

                        {/* menggunakan redux */}
                        <div style={{width:'150px', marginLeft:'80px'}}>
                            <p style={{fontSize:"16px", fontWeight:'bold'}}>Jumlah</p>
                            <div className="d-flex justify-content-between" style={{height:'36px', width:'150px'}}>
                                <Link className="text-decoration-none"  onClick={ () => {
                                    if(counterNumber !== 0){
                                        this.props.dispatch(subCounterCreator())
                                    }
                                }}>
                                    <div className="btn-c" style={{backgroundColor:'#D4D4D4'}}>-</div>
                                </Link>
                                    <p>{counterNumber}</p>
                                <Link className="text-decoration-none" onClick={ () => {
                                    if(counterNumber !== product_qty){
                                        this.props.dispatch(addCounterCreator())
                                    }
                                }}>
                                    <div className="btn-c" style={{backgroundColor:'#FFFFFF', border:"solid 1px"}}>+</div>
                                </Link> 
                            </div>
                        </div>
                    </div>
                   <Row className="justify-content-between mt-3">
                        <Link  className="chat text-decoration-none d-flex">Chat</Link>
                        <Link  className="add-bag text-decoration-none d-flex" onClick={this.handleSubmit}>Add bag</Link>
                        <Link  className="buy-now text-decoration-none d-flex ">Buy Now</Link>
                   </Row>
                </div>
                
            </Row>
            <div>
                <h2 className="information">Informasi Product</h2>
                <p className="condition">Condition</p>
                <p className="v-condition">{product_condition}</p>
                <p className="condition">Description</p>
                <p className="v-description">{product_desc}</p>
            </div>
            <div>
                <p className="prdct-revw">Peoduct review</p>
                <div className="ratee">
                    <div className="ratee-number">
                        <p className="txt-rating">{Math.round(total_rating)}<p className="per text-muted">/5</p> </p>
                        <div className="d-flex d-flex justify-content-center">
                            <img src={BigStar} />
                            <img src={BigStar} />
                            <img src={BigStar} />
                            <img src={BigStar} />
                            <img src={BigStar} />
                        </div>
                    </div>
                    <div className="dtl-rate justify-content-between">
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>5</p>
                            <div className="indicator-active"></div>
                            <p>1</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>4</p>
                            <div className="indicator-non"></div>
                            <p>0</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>3</p>
                            <div className="indicator-non"></div>
                            <p>0</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>2</p>
                            <div className="indicator-non"></div>
                            <p>0</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>1</p>
                            <div className="indicator-non"></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                size="sm"
                show={smShow}
                centered={true}
                onHide={() => {
                    this.setState({
                        smShow : false
                    })
                }}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Warning!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Choose color and Size first</Modal.Body>
            </Modal>
            
            </>
        )
    }
}

const mapStateToProps = ({counter}) => {
    return{
       counter
    }
}

const counterWithRedux = connect(mapStateToProps)(DetailProduct)

export default counterWithRedux
