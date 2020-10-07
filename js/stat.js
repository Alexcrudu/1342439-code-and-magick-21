'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const FOUNT_GAP = 20;
const TEXT_POSITION = 260;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const BAR_GAP = 50;


function getRandomColor() {
  return 'hsl(235, 100%,' + Math.random() * 100 + '%';
}

function renderText(ctx, text, x, y, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
}

function getMaxTime(times) {
  let maxTime = times[0];

  for (let i = 1; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  return maxTime;
}

function drawColumn(index, name, color, time, maxTime, ctx) {
  ctx.fillStyle = '#000';
  time = Math.floor(BAR_HEIGHT * time / maxTime);

  renderText(ctx, name, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * index, TEXT_POSITION, 'PT Mono', '#000');
  renderText(ctx, time, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * index, (TEXT_POSITION - BAR_HEIGHT) + BAR_HEIGHT - time - FOUNT_GAP - CLOUD_GAP, 'PT Mono', '#000');
  ctx.fillStyle = color;
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * index, (TEXT_POSITION - BAR_HEIGHT) + BAR_HEIGHT - time - CLOUD_GAP, BAR_WIDTH, time);
}

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';

  for (let i = 0; i < names.length; i++) {
    let color = '';

    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      color = getRandomColor();
    }

    drawColumn(i, names[i], color, times[i], getMaxTime(times), ctx);
  }

  renderText(ctx, 'Ура вы победили!', CLOUD_X + FOUNT_GAP, CLOUD_Y + FOUNT_GAP, 'PT Mono', '#000');
  renderText(ctx, 'Список результатов:', CLOUD_X + FOUNT_GAP, CLOUD_Y + FOUNT_GAP + FOUNT_GAP, 'PT Mono', '#000');
};

