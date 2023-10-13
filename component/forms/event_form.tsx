import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import SignatureCanvas from 'react-signature-canvas';
import { TextInput } from '../common/inputs';
import FlexWrapper, { LayWrapper } from '../layout/flexWrapper';

const EventForm = () => {
  const sigCanvas = useRef<any>();
  const {
    register, handleSubmit, setValue, formState: { isDirty, isValid },
  } = useForm({
    reValidateMode: 'onChange',
  });
  const handleSaveSign = () => {
    setValue('signature', sigCanvas.current.getTrimmedCanvas().toDataURL('image/webp'));
  };
  const handleClear = () => {
    setValue('signature', '');
    sigCanvas.current.clear();
  };

  const handleRegister = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-100">
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="w-100">
          <FlexWrapper>

            <TextInput
              {...register('firstName', { required: true })}
              placeholder="e.g Musa"
              label="First name"
            />

            <TextInput {...register('lastName', { required: true })} placeholder="e.g Ifeanyi Ola" label="Last name" />
          </FlexWrapper>

          <LayWrapper>
            <TextInput {...register('Email Address', { required: true })} label="email" />
          </LayWrapper>
          <LayWrapper>
            <TextInput type="number" {...register('Phone number', { required: true })} label="phone" />
          </LayWrapper>
          <LayWrapper>
            <TextInput {...register('specialty', { required: true })} label="Specialty" />
          </LayWrapper>
          <LayWrapper>
            <TextInput {...register('institution', { required: true })} label="Institution" />
          </LayWrapper>

          <LayWrapper>
            <TextInput {...register('designation', { required: true })} label="Designation" />
          </LayWrapper>
          <h1>Signature</h1>
          <div className="border my-4">
            <SignatureCanvas
              penColor="green"
              ref={sigCanvas}
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
            />
          </div>
          <div className="flex" style={{ justifyContent: 'space-between' }}>
            <button type="button" onClick={handleSaveSign}>Save signature</button>
            <button type="button" onClick={handleClear}>cancel</button>
          </div>
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="disabled:bg-red"
            style={{
              background: 'black', color: '#fff', width: '100%', padding: '1em', borderRadius: '1em', margin: '1em 0',
            }}
          >
            Complete
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
