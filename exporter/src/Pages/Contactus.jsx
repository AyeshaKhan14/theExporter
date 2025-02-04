import { ContactDetails } from "../Components/Contact/ContactDetails";
import { Form } from "../Components/Contact/Form";

export const Contactus = () => {
  return (
    <div className='border w-full md:p-10  border-yellow-500'>
      <div className='text-xl md:text-4xl p-4 md:p-8 font-medium text-center'>
        <span className='bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent'>
          Get in Touch
        </span>{" "}
        <span>with Us</span>
        <div className='md:p-4 w-full mt-2 md:w-[60%] md:m-auto'>
          <p className='md:text-[20px]  text-sm text-gray-500 md:leading-8'>
            Do you have any questions, feedback, or need assistance? We're just
            a message away. Please fill out the form below, and we will respond
            to you shortly.
          </p>
        </div>
      </div>
      <div className='w-full  flex flex-col md:flex-row  justify-center gap-10'>
        <Form />
        <ContactDetails />
      </div>
    </div>
  );
};
