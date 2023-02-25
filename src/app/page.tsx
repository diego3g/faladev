export default function Home() {
  return (
    <div className="flex flex-col items-center mt-8">
      <img src="/vscode-icon.png" className="w-2/6 opacity-40" />

      <table className="border-separate border-spacing-3 mt-2 text-[#7e7c94] text-sm">
        <tbody>
          <tr>
            <td className="text-end">Ver código fonte</td>

            <td className="flex flex-row text-[#766591]">
              <Shortcut>Crtl</Shortcut>
              +
              <Shortcut>U</Shortcut>
            </td>
          </tr>

          <tr>
            <td className="text-end">Inspecionar elemento</td>

            <td className="flex flex-row text-[#766591]">
              <Shortcut>Crtl</Shortcut>
              +
              <Shortcut>Shift</Shortcut>
              +
              <Shortcut>C</Shortcut>
            </td>
          </tr>

          <tr>
            <td className="text-end">Tela cheia</td>

            <td className="flex flex-row text-[#766591]">
              <Shortcut>F11</Shortcut>

            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

interface ShortcutProps {
  children: String;
}

const Shortcut = (props: ShortcutProps) => {
  return (
    <div className="bg-[#35314c] text-[#766591] px-1 text-[11px] rounded-sm mx-0.5">
      <p>{props.children}</p>
    </div>
  )
}