function formatLocalTime(date: Date): string {
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function main(): void {
  const watch = process.argv.includes("--watch");

  if (!watch) {
    console.log(formatLocalTime(new Date()));
    return;
  }

  // Режим --watch: обновляем время в одной строке каждую секунду (Ctrl+C — выход).
  const tick = (): void => {
    process.stdout.write(`\r${formatLocalTime(new Date())}`);
  };
  tick();
  setInterval(tick, 1000);
}

main();
