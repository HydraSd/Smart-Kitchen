import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Details submitted successfully");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
            isInvalid={!!errors.name}
            {...register("name", { required: "Name is required" })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            isInvalid={!!errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Contact number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your contact number"
            required
            isInvalid={!!errors.phone}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/i,
                message: "Invalid phone number format",
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            required
            isInvalid={!!errors.message}
            {...register("message", { required: "Message is required" })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <center>
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </center>
      </Form>
    </div>
  );
}

export default ContactForm;
