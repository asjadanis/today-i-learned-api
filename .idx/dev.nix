{pkgs}: {

  # Which nixpkgs channel to use.
  channel = "stable-23.05"; # or "unstable"

  # Use https://search.nixos.org/packages to  find packages
  packages = [
    pkgs.nodejs_20
  ];

  # sets environment variables in the workspace
  env = {
  };

  # search for the extension on https://open-vsx.org/ and use "publisher.id"
  idx.extensions = [
    "prisma.prisma"
    "usernamehw.errorlens"
    "dbaeumer.vscode-eslint"
    "rangav.vscode-thunder-client"
    "eamodio.gitlens"
  ];

  # preview configuration, identical to monospace.json
  idx.previews = {
    enable = true;
  };
}