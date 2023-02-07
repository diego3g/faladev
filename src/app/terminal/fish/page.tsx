import { CodePreview } from "@/components/CodePreview";
import shiki from "shiki";

export const metadata = {
  title: "Fish",
};

const fishConfig = `if status is-interactive
# Commands to run in interactive sessions can go here
end

set SPACEFISH_PROMPT_ADD_NEWLINE false

# Deno
export DENO_DEPLOY_TOKEN="ddp_duwr9g1UM65t6BkaWntsOU64DRZhXk2gOIF4"
export DENO_INSTALL="/Users/diegofernandes/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
export PATH="/Users/diegofernandes/.rover/bin:$PATH"

starship init fish | source

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/diegofernandes/google-cloud-sdk/path.fish.inc' ]; . '/Users/diegofernandes/google-cloud-sdk/path.fish.inc'; end

# Aliases
alias cat="bat --theme=\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo default || echo GitHub)"`;

export default async function FishConfig() {
  const highlighter = await shiki.getHighlighter({
    theme: "rose-pine-moon",
  });

  const code = highlighter.codeToHtml(fishConfig, { lang: "fish" });

  return <CodePreview code={code} raw={fishConfig} />;
}
