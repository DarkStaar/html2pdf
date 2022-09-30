import { useForm } from "react-hook-form";
import { Button } from "reactstrap";

const Contact = () => 
{
    const { register, handleSubmit } = useForm();

    return(
        <>
        <a className="contact-div" src="contact.png">
            {/* TODO Bloat FIX IT */}
           <img src="woman.png"/>
           <img src="fax.png"/>
           <img src="calendar.png"/>
           <img src="headphones.png"/>
           <img src="id.png"/>
           <img src="monkeya.png"/>
           <img src="paperpencil.png"/>
           <img src="phonemsg.png"/>
           <img src="clock.png"/>
           <img src="phonecircle.png"/>
           <img src="contact.png"/>
           <img src="like.png"/>
           <img src="paperpencil.png"/>
           <img src="phonemsg.png"/>
           <img src="clock.png"/>
        </a>
        <div className="contact-inner">
        <p className="contact-header">Contact Now</p>
        <br />
        <p className="contact-footer">In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.</p>
        <br />
        <form className="contact-form">
            <input className="contact-input" placeholder="Name*" {...register("name", { required: true, maxLength: 50 })}/>
            <input className="contact-input" placeholder="Email*" {...register("email", { required: true, maxLength: 100 })}/>
            <input className="contact-input" placeholder="Phone*" {...register("phone", { required: true, maxLength: 40 })}/>
            <textarea className="contact-input-message" placeholder="Message" {...register("message")}/>
            <Button className="contact-button" type="submit">Submit</Button>
        </form>
    </div>
    </>
    );
}

export default Contact;