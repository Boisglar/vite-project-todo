import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

export default function JournalForm({ onSubmit }) {
  const [formValidState, setFormValideState] = useState({
    title: true,
    post: true,
    date: true,
  });

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
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        type="text"
        name="title"
        style={{ border: formValidState.title ? undefined : '1px solid red' }}
      />
      <input
        type="date"
        name="date"
        style={{ border: formValidState.date ? undefined : '1px solid red' }}
      />
      <input type="text" name="tag" />
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        style={{ border: formValidState.post ? undefined : '1px solid red' }}></textarea>
      <Button text="сохранить" />
    </form>
  );
}
