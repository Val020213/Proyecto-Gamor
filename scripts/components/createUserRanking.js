export default function (number, name, image) {
  return `\
        <tr onclick="addPlayer('${image}')" style="cursor: pointer;">\
            <td>\
                <div><span id="ranking-number" class="icon"\
                    style="border-radius: 99px; background-color: var(--auxialiar-color);">${number}</span>${name}</div>\
            </td>\
            <td>\
                <div style="position: relative; width: 50px;">\
                    <img class="icon"\
                        style="border-radius: 99px; background-color: blueviolet; position: absolute; top: 0; left: 0;"\
                        src=${image} />\
                </div>\
            </td>\
            <td>\
                <div class="icon">\
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\
                        <path d="M12 5V19M5 12H19" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"\
                            stroke-linejoin="round" />\
                    </svg>\
                </div>\
            </td>\
        </tr>\ `;
}
