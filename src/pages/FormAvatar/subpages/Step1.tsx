import { useSubmit } from "../../../hooks/useSubmit";
import { AvatarMaker, Button, Form } from "../../../components";

export const Step1 = () => {
  const { name, setName, next } = useSubmit();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  
  return (
    <Form.Fieldset>
      <Form.Legend>Crie a melhor caneca para o seu papai!</Form.Legend>
      <AvatarMaker.Root>
        <AvatarMaker.Frame />
      </AvatarMaker.Root>
      <Form.Input
        value={name}
        setValue={setName}
        onKeyDown={handleKeyDown}
        type="text"
        name="fatherName"
        placeholder="Digite o nome do seu pai"
        required
      />

      <Form.Buttons>
        <Button.Root disabled={name ? false : true} onClick={next}>Personalizar avatar</Button.Root>
      </Form.Buttons>
    </Form.Fieldset>
  )
}
