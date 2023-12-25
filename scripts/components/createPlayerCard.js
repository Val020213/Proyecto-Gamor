var counter = 0;

const positions = [
  "bottom: 10%; left: 12px",
  "bottom: 20%; right: 16px",
  "bottom: 30%; left: 6px",
  "bottom: 40%; right: 10px",
  "bottom: 50%; left: 8px",
  "bottom: 60%; right: 8px",
];

function roundRobin() {
  console.log(counter);
  var curr = counter;
  counter = (counter + 1) % positions.length;
  return positions[curr];
}

function createPlayerCard(img) {
  var position = roundRobin();
  return `
      <div class='minicard-player'
        style="position: absolute;${position}; background-image: url(${img});">
        <div class="badge">
            <svg style=" position: absolute;top: 50%;left: 50%; transform: translate(-50%, -50%);"
                xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                d="M9.75015 6.28609L6.00015 10.0001L2.25015 6.28609C2.0028 6.0454 1.80797 5.7561 1.67792 5.43641C1.54788 5.11672 1.48543 4.77356 1.49452 4.42856C1.50361 4.08355 1.58403 3.74416 1.73073 3.43176C1.87743 3.11936 2.08722 2.84072 2.34689 2.61338C2.60657 2.38604 2.9105 2.21493 3.23956 2.11083C3.56861 2.00672 3.91565 1.97188 4.25883 2.00849C4.60202 2.0451 4.9339 2.15237 5.23359 2.32354C5.53328 2.49472 5.79427 2.72609 6.00015 3.00309C6.20692 2.7281 6.46822 2.49875 6.7677 2.32939C7.06718 2.16003 7.3984 2.05431 7.74062 2.01885C8.08284 1.98338 8.42869 2.01894 8.75654 2.12328C9.08438 2.22763 9.38716 2.39852 9.64593 2.62527C9.90469 2.85202 10.1139 3.12973 10.2604 3.44103C10.4069 3.75234 10.4875 4.09053 10.4973 4.43444C10.5071 4.77835 10.4458 5.12058 10.3172 5.43971C10.1887 5.75884 9.9956 6.048 9.75015 6.28909"
                fill="white" />
                <path
                d="M9.75015 6.28609L6.00015 10.0001L2.25015 6.28609C2.0028 6.0454 1.80797 5.7561 1.67792 5.43641C1.54788 5.11672 1.48543 4.77356 1.49452 4.42856C1.50361 4.08355 1.58403 3.74416 1.73073 3.43176C1.87743 3.11936 2.08722 2.84072 2.34689 2.61338C2.60657 2.38604 2.9105 2.21493 3.23956 2.11083C3.56861 2.00672 3.91565 1.97188 4.25883 2.00849C4.60202 2.0451 4.9339 2.15237 5.23359 2.32354C5.53328 2.49472 5.79427 2.72609 6.00015 3.00309C6.20692 2.7281 6.46822 2.49875 6.7677 2.32939C7.06718 2.16003 7.3984 2.05431 7.74062 2.01885C8.08284 1.98338 8.42869 2.01894 8.75654 2.12328C9.08438 2.22763 9.38716 2.39853 9.64593 2.62527C9.90469 2.85202 10.1139 3.12973 10.2604 3.44103C10.4069 3.75234 10.4875 4.09053 10.4973 4.43444C10.5071 4.77835 10.4458 5.12058 10.3172 5.43971C10.1887 5.75884 9.9956 6.048 9.75015 6.28909"
                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg> 
          </div>
        </div>`;
}
function createPlayerCard2(img) {
  var position = roundRobin();
  return `
    <div class='minicard-player'
        style="position: absolute; ${position}; background-image: url(${img});"></div>`;
}

function addPlayer(img) {
  var container = document.getElementById("imagen-section");
  var allPlayers = document.querySelectorAll(".minicard-player");
  if (allPlayers.length >= positions.length) {
    allPlayers[counter].remove();
  }
  container.innerHTML += createPlayerCard2(img);
}
