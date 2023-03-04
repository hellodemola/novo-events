import { forwardRef } from 'react';

interface ITextInput {
    label: string,
  placeholder?: string,
  onChange?: any,
  name?: string,
  type?: string,
}

const TextInput = forwardRef(({
  label, placeholder, name, onChange, type = 'text',
}: ITextInput, ref: any) => (
  <label htmlFor={name}>
    <p
      className="text-[red] my-4 capitalize"
      style={{
        textTransform: 'capitalize', color: 'rgb(108 113 127)', fontSize: '14px', marginBottom: '0.2em',
      }}
    >
      {label}

    </p>
    <input
      onChange={onChange}
      type={type}
      name={name}
      ref={ref}
      placeholder={placeholder}
      className="w-100 border rounded border-t-8"
      style={{
        padding: '0.5em',
        borderRadius: '0.5em',
        border: '1px solid #c3c6ca',
        width: '100%',
        height: '3em',
      }}
    />
  </label>
));

export default TextInput;

TextInput.defaultProps = {
  placeholder: '',
  onChange: () => null,
  name: '',
  type: 'text',
};
