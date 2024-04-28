import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/appSlice';
import { loadPersonData } from '../slices/userSlice';
import { addUserFiles } from '../slices/cloudSlice';
import { loadData } from '../slices/adminSlice';


//Хук загрузки данных в состояния при прохождении аутентификации(вход)
export function useLogin({ person, data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
    dispatch(loadPersonData(person));
    dispatch(addUserFiles(person.files));
    if(data) {
      dispatch(loadData(data));
    }
  },[dispatch, person, data]);
}
