import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Content, UserList } from './styles';
import Image from 'next/image';
import { api } from '../../libs/API';
import { IUser } from '../../interface/IUser';

export default function SendFile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [messageNOK, setMessageNOK] = useState('');
  const [messageOK, setMessageOK] = useState('');
  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/user/users');
      setUserList(response.data);
    }
    loadUsers();
  }, []);

  //axios post with multipart/form-data

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);

    try {
      const result = await api.post(`/file/create/${data.username.toLowerCase()}/${data.password}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessageOK(result.data);
      setMessageNOK('')
    } catch (error) {
      console.log('error', error.response.data.error);
      setMessageNOK(error.response.data.error);
      setMessageOK('')
    }
  };

  const handleTest = async () => {};

  return (
    <Container>
      <Content>
        <div className="flex">
          <div className="flex flex-col">
            <Image src="/assets/images/logo.png" alt="Logo" width={180} height={180} className="cursor-pointer" />
          </div>
        </div>
        <div className="header">
          <div className="text-4xl text-white">Form to send File</div>
        </div>
        <div className="content p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mt-8 gap-2">
              <span className="text-white">Username</span>
              <input className="input" type="text" {...register('username', { required: true })} />
              {errors.username && <span className="text-red-400">This field is required</span>}
              <span className="text-white">Password</span>
              <input className="input" type="password" {...register('password', { required: true })} />
              {errors.password && <span className="text-red-400">This field is required</span>}
              <span className="text-white">File to Upload</span>
              <input className="input text-white mb-2" type="file" {...register('file', { required: true })} />
              {errors.file && <span className="text-red-400">None file uploaded!</span>}
              <div className="flex justify-center items-center">
                <Button type="submit" onClick={handleTest} className="mb-2">
                  Send
                </Button>
              </div>
              <div className="text-center mb-2">
                {messageOK && <span className="text-green-400">{messageOK}</span>}
                {messageNOK && <span className="text-red-400">{messageNOK}</span>}
              </div>
            </div>
          </form>
        </div>
        <UserList>
          <div
            className="text-white text-xl items-center text-center mb-2 w-full"
            style={{ backgroundColor: '#2b2424' }}
          >
            users:
          </div>
          {userList.map((user, index) => (
            <div key={index} className={`text-white text-center w-full ${index % 2 == 0 ? '' : 'bg-blue-900'}`}>
              {user.username}
            </div>
          ))}
        </UserList>
        <span className="text-white text-xl">{'Password: 1234 -> default password for all users'}</span>
      </Content>
    </Container>
  );
}
