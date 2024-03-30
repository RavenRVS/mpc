import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <h1
        className="error__title"
      >
        Ой-ой-ой, что-то пошло не так...
      </h1>
      <p
        className='error__message'
      >
        <i>{`${error.message}` || `${error.statusText}`}</i>
      </p>
    </div>
  );
}