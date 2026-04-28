"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const SignUpPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = Object.fromEntries(formData.entries());
  };

  return (
    <div className="mx-auto flex rounded-md mb-20 w-full max-w-md flex-col items-center justify-center gap-6 px-4 bg-white">
      <h4 className="mt-10 font-bold text-2xl sm:text-3xl">Sign Up </h4>
      <Form
        className="flex w-96 flex-col  gap-4"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <TextField isRequired name="fullName">
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" />

          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input className="bg-gray-50" placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input className="bg-gray-50" placeholder="Enter your password" />

          <FieldError />
        </TextField>

        <div className="">
          <Button className="w-full mb-2" type="submit">
            Sign Up
          </Button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </Form>
      <div className="">
        <p className="text-center font-semibold text-lg mb-3 ">
          Or Sign in with
        </p>
        <Button className="flex justify-center mx-auto mb-6" variant="tertiary">
          <Icon icon="devicon:google" />
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
