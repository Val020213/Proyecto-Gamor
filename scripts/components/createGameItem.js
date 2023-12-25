export default function (name, img, id) {
  return `<div onclick="changeGame('${name}', '${id}')" style="cursor: pointer; gap: 0;">
        <img src="${img}" style="border-radius: 99px;" /><p>${name}</p>
    </div>`;
}
