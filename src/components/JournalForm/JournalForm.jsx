import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import style from './JournalForm.module.css';
import cn from 'classnames';

const INITIAL_STATE = {
  title: true,
  post: true,
  date: true,
};

export default function JournalForm({ onSubmit }) {
  const [formValidState, setFormValideState] = useState(INITIAL_STATE);

  useEffect(() => {
    if (!formValidState.date || !formValidState.post || !formValidState.title) {
      let timerId = setTimeout(() => {
        setFormValideState(INITIAL_STATE);
      }, 2000);

      console.log(timerId);

      return () => clearTimeout(timerId);
    }
  }, [formValidState]);

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setFormValideState((prev) => ({ ...prev, title: false }));
      isFormValid = false;
    } else {
      setFormValideState((prev) => ({ ...prev, title: true }));
    }
    if (!formProps.post?.trim().length) {
      setFormValideState((prev) => ({ ...prev, post: false }));
      isFormValid = false;
    } else {
      setFormValideState((prev) => ({ ...prev, post: true }));
    }
    if (!formProps.date) {
      setFormValideState((prev) => ({ ...prev, date: false }));
      isFormValid = false;
    } else {
      setFormValideState((prev) => ({ ...prev, date: true }));
    }
    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
    e.target.reset();
  };

  return (
    <form className={style['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={cn(style['input-title'], {
            [style['invalid']]: !formValidState.title,
          })}
        />
      </div>

      <div className={style['form-row']}>
        <label htmlFor="date" className={style['form-label']}>
          <img src="public/date.svg" alt="иконка даты" className={style['svg']} />
          <p>Дата</p>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={cn(style['input'], {
            [style['invalid']]: !formValidState.date,
          })}
        />
      </div>

      <div className={style['form-row']}>
        <label htmlFor="tag" className={style['form-label']}>
          <img src="public/folder.svg" alt="Bконка тэга" className={style['svg']} />
          <p>Метки</p>
        </label>
        <input type="text" name="tag" id="tag" className={style['input']} />
      </div>
      <textarea
        name="post"
        id="post"
        cols="30"
        rows="10"
        className={cn(style['input'], {
          [style['invalid']]: !formValidState.post,
        })}
      />
      <Button text="сохранить" />
    </form>
  );
}
