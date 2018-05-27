import ViewHelper from '../view/ViewHelper';

export default function listTemplateWithTemplateString(selector, allnotes) {
  if (allnotes) {
    const notes = allnotes.map((note, i) => `<div class="note ${note.isFinished ? 'finished' : ''}">
        <div class="listDateStatus">
            <p>${note.datepicker}</p>
            <p><input id="checkBoxisFinished" type="checkbox" data-id="${note.id}" ${note.isFinished ? 'checked' : ''}> Finished</p>
        </div>
        <div class="listTitleDescriptionImportance">
            <div class="flexTitleImportance">
                <div class="title">
                    <p>${note.title}</p>
                </div>
                <div class="note__importance">
                    <div class="importance" data-id="${note.id}">
                        ${ViewHelper.selectimportance(parseInt(note.importance))}
                    </div>
                </div>
            </div>
            <textarea class="description" name="description" cols="30" rows="6" data-description-id="${note.id}" disabled="disabled">${note.description}</textarea>
        </div>
        <div class="listActionButton">
            <button id="listEdit" data-id="${note.id}">Edit</button>
            <button id="listDelete" data-id="${note.id}">Delete</button>
        </div>
    </div>`);

    selector.innerHTML = notes.join(''); // remove comma from list
  }
}
