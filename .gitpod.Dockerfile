FROM gitpod/workspace-full:latest

USER gitpod

RUN sudo bash -cl "echo -e \"\n127.0.0.1       emrinangelov\n127.0.0.1       fr.emrinangelov\" >> /etc/hosts"
