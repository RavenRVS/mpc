import { redirect, useLoaderData} from 'react-router-dom';
import { useLogin } from '../../app/customHooks';
import { getPerson, isAdmin } from '../../app/apiRequests';
import FieldPersonInfo from '../../components/FieldPersonInfo/FieldPersonInfo';
import { useState } from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import appData from '../../app/appData';

//Загрузка данных аккаунта
export async function loader() {
  // const check = await isAdmin();
  const person = await getPerson();
  if (person.error) {
    return redirect('/');
  }
  // if (check.admin) {
  //   return redirect(`/user_card/${person.id}`);
  // }
  return { person };
}

//КОМПОНЕНТ(роут) СТРАНИЦЫ ЛИЧНЫХ ДАННЫХ АККАУНТА
export default function PersonInfo() {
  const { person } = useLoaderData();
  const [message, setMessage] = useState(false);
  useLogin({ person });
  
  return (
    <div
      className="w-full h-full flex flex-col items-center"
    >
      <span
        className="mt-[40px] mb-[40px]"
      >
        <h1
          className="text-xl font-sans font-bold text-gray-800"
        >
          ВАШИ ДАННЫЕ
        </h1>
      </span>
      <p
        className={`${message.error ? 'text-red-700' : 'text-black' } h-4 mb-3 text-center text-sm font-bold`}
      >
        {message.error ? message.error : message.success ? message.success : ''}
      </p>
      <>
        {Object.keys(appData.fields).map((atr, index) => {
            if (atr === 'isAdmin') {
              return null;
            }
          return (
            <FieldPersonInfo
              key={index}
              atribute={atr}
              text={appData.fields[atr]}
              setMessage={setMessage}
            />
          );
        })}
      </>
      <ButtonBack />
    </div>
  );
}