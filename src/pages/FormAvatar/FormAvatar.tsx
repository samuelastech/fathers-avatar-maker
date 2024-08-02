import { SubmitContext, SubmitProvider } from "../../contexts/submitContext";
import { Step1, Step2 } from "./subpages";
import { Form } from "../../components/Form";
import { AvatarProvider } from "../../contexts/avatarContext";

export const FormAvatar = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <AvatarProvider>
        <SubmitProvider>
          <Form.Root>
            <Form.Steps />
            <SubmitContext.Consumer>
            {({ step }) => {
                return (
                  step === 1 ? <Step1 /> :
                  step === 2 ? <Step2 /> : null
                );
            }}
            </SubmitContext.Consumer>
          </Form.Root>
        </SubmitProvider>
      </AvatarProvider>
    </div>
  );
};
