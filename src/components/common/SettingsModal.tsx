"use client";

import React from "react";
import Modal from "./Modal";
import clsx from "clsx";
import FontAwesomeIcon from "./FontAwesomeIcon";
import useSettings from "@/utils/useSettings";
import Spinner from "./Spinner";
import Button from "./Button";
import { Field, Form, Formik } from "formik";
import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from "@/constants";
import { SettingConfigs } from "@/models/types";
import { settingsValidationSchema } from "@/constants/validationSchema";

type InitialValues = Omit<SettingConfigs, "isModalOpen">;

const SettingsModal = () => {
  const { settings, updateSettings, isSettingsConfigRetrived } = useSettings();

  const handleSubmit = (values: InitialValues) => {
    updateSettings({ ...values, isModalOpen: false });

    setTimeout(() => {
      location.reload();
    }, 300);
  };

  const openModal = () => {
    updateSettings({ isModalOpen: true });
  };

  const closeModal = () => {
    updateSettings({ isModalOpen: false });
  };

  return (
    <>
      <div className="flex items-center">
        <FontAwesomeIcon className="fa-solid fa-gear" onClick={openModal} />
      </div>

      <Modal
        cardClassName="min-h-80"
        title="Settings"
        isOpen={settings?.isModalOpen}
        onClose={closeModal}
      >
        <Formik
          enableReinitialize
          initialValues={settings}
          onSubmit={handleSubmit}
          validateOnMount
          validationSchema={settingsValidationSchema}
        >
          {({ values, errors }) => {
            return (
              <Form>
                {!isSettingsConfigRetrived ? (
                  <div className="flex justify-center">
                    <Spinner />
                  </div>
                ) : (
                  <div className="pt-4 flex flex-col gap-3">
                    <div className="text-center">
                      <h3 className="bg-slate-100 py-3 rounded-md font-semibold">
                        Number of words
                      </h3>
                      <div className="">
                        <Field
                          type="number"
                          name="wordLength"
                          min={MIN_WORD_LENGTH}
                          max={MAX_WORD_LENGTH}
                          placeholder={MIN_WORD_LENGTH}
                          className={clsx(
                            "w-20 mt-2 border-2 border-gray-300  rounded-md p-2 text-center font-bold",
                            { "border-red-800": errors?.wordLength }
                          )}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="bg-slate-100 py-3 rounded-md font-semibold">
                        Theme
                      </h3>
                      <div
                        title="This feature not yet supported"
                        className="flex gap-3 justify-center mt-2 uppercase opacity-40"
                      >
                        <label
                          className={clsx(
                            "mr-2 p-3 cursor-pointer border-2 rounded-md w-32",
                            {
                              "border-yellow-600 text-yellow-600":
                                values.theme === "light",
                            }
                          )}
                        >
                          <Field
                            disabled
                            hidden
                            value="light"
                            className="me-2"
                            type="radio"
                            name="theme"
                          />
                          Light
                        </label>
                        <label
                          className={clsx(
                            "mr-2 p-3 cursor-pointer border-2 rounded-md w-32",
                            {
                              "border-blue-800 text-blue-800":
                                values.theme === "dark",
                            }
                          )}
                        >
                          <Field
                            disabled
                            value="dark"
                            hidden
                            className="me-2"
                            type="radio"
                            name="theme"
                          />
                          Dark
                        </label>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="bg-slate-100 py-3 rounded-md font-semibold text-center">
                        Difficulty
                      </h3>
                      <div
                        title="This feature not yet supported"
                        className="flex gap-3 justify-center mt-2 uppercase  opacity-40"
                      >
                        <label
                          className={clsx(
                            "mr-2 p-3 cursor-pointer border-2 rounded-md w-32",
                            {
                              "border-yellow-600 text-yellow-600":
                                values.difficulty === "normal",
                            }
                          )}
                        >
                          <Field
                            hidden
                            className="me-2"
                            type="radio"
                            name="difficulty"
                            value="normal"
                          />
                          Normal
                        </label>
                        <label
                          className={clsx(
                            "mr-2 p-3 cursor-pointer border-2 rounded-md w-32",
                            {
                              "border-blue-800 text-blue-800":
                                values.difficulty === "hard",
                            }
                          )}
                        >
                          <Field
                            hidden
                            className="me-2"
                            type="radio"
                            name="difficulty"
                            value="hard"
                          />
                          Hard
                        </label>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="mt-4 w-full active:scale-75"
                    >
                      Save
                    </Button>
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default SettingsModal;
