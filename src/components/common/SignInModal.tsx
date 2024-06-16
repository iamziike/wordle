"use client";

import React from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ComponentReducerState {
  isOpen: boolean;
  isFirstTimeUser: boolean;
}

const SignInModal = () => {
  return (
    <Modal title="Click to Continue" isOpen={false} onClose={() => {}}>
      <div className="mt-5">
        <div className="flex justify-between">
          <Button className="w-56">Anonymous User</Button>
          <Button className="w-56">Signin</Button>
        </div>
        <br />
        <div className="text-center opacity-60">
          <i className="fa-solid fa-circle-info" /> <a href="">Sign-in</a> to
          get daily challenges and also play with friends
        </div>
        {/* Sign in to playing or continue as an anonymous user. Note that if you
        play anonymously, you won't be able to play with friends or participate
        in the daily challenge. */}
      </div>
    </Modal>
  );
};

export default SignInModal;
