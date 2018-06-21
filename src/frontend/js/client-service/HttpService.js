export default class HttpService {
  // Common Methods have to implement in every Service like an Interface
  getNotes(callback) {
    $.ajax({
      method: 'GET',
      url: '/api/notes/',
      success: (res) => {
        if (callback) {
          callback(res);
        }
      },
    });
  }

  addNote(note) {
    $.ajax({
      method: 'POST',
      url: '/api/notes/',
      data: note,
      success: (() => {
        window.location.href = '/';
      }),
    });
  }

  deleteNote(id) {
    $.ajax({
      method: 'DELETE',
      url: `/api/notes/${id}/`,
      success: (res) => {
        console.log(res);
      },
    });
  }

  updateNoteById(id, note) {
    $.ajax({
      method: 'PUT',
      url: `/api/notes/${id}/`,
      data: note,
      success: (res) => {
        console.log(res);
      },
    });
  }

  patchNote(id, note) { // for just one atom value, ie importance, checkbox finished
    $.ajax({
      method: 'PATCH',
      url: `/api/notes/${id}/`,
      data: note,
      success: () => 200,
    });
  }

  toggleCheckBox(id, status) {
    $.ajax({
      method: 'POST',
      url: `/api/notes/${id}/?status=${status}`,
      success: (() => 200),
    });
  }

  getNoteByID(id) {}

  updateNote(note) {}
}

