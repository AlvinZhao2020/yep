import React from 'react'
import HeaderContainer from '../header/header_container'
import {withRouter} from 'react-router-dom'

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            author_id: this.props.currentUser,
            biz_id: this.props.match.params.id,
            rating: 5,
            body:''
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.submitDone=this.submitDone.bind(this);
    }

    submitDone(){
        this.props.history.push(`/businesses/${this.props.match.params.id}`);
    }

  
    loginAlert(){
        alert('Before you leave a review You need to login first')
    }

    handleSubmit(e){
        e.preventDefault;
        if(this.props.currentUser){
            this.props.action(this.state)
            .then(this.submitDone())
        }else{ 
           this.loginAlert()
        }
    }

    handleInput(field){
       return e=>this.setState({[field] :e.target.value})
    }
    render(){
        return (
            <div>
                <HeaderContainer/>
                <div className='form-box'>
                    <div className='form-title'>{this.props.formType}</div>          
                    <div className='from-info-box'>
                        <form className='review-form' onSubmit={this.handleSubmit}>
                            <div className='form-wrapper'>
                            <div className='review-form-rating'>
                                    <label>How&nbsp;Many&nbsp;Stars&nbsp;:&nbsp;<i className="far fa-star"></i>
                                <select 
                                value={this.state.rating} 
                                className='star-selector'
                                onChange={this.handleInput('rating')}
                                >
                                    <option value="1">1 star  </option>
                                    <option value="2">2 stars </option>
                                    <option value="3">3 stars </option>
                                    <option value="4">4 stars </option>
                                    <option value="5">5 stars </option>
                                </select>
                                </label>
                            </div>
                            <div className='review-body'>
                                <textarea 
                                    className='body-text'
                                    rows='13'
                                    cols='50' 
                                    value={this.state.body}
                                    onChange={this.handleInput('body')}
                                    placeholder='This spot is serving meal kits, as well as offering delivery during COVID. I’m so glad! Of course nothing beats the in-person experience, but delivery is a great second option right now. The food was a little cold, but I understand this is a new operation for them...'
                                />
                            </div>
                            </div>
                            <div className='submit-button-box'>
                                <div className='rform-submit-button'>
                                    <input type="submit" value={this.props.formType}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReviewForm)