export async function getTheme() {
  const response = await fetch(
    "https://gist.githubusercontent.com/diego3g/b1b189063d21b96d6144ca896755be64/raw/765a17e8c439d25b1866c1322437a6da2b9e4be8/settings.json"
  )
  const data = await response.text()

  let theme = "rose-pine-moon"

  data.split("\n").map((line: string) => {
    if (line.includes("workbench.colorTheme")) {
      theme = line
        .split(": ")[1]
        .split(" ")
        .join("-")
        .replaceAll('"', "")
        .toLowerCase()
    }
  })

  return theme
}
