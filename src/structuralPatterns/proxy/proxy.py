from abc import ABC, abstractmethod


class ICelebrity(ABC):

    @abstractmethod
    def autograph(self) -> None:
        pass


class Celebrity(ICelebrity):

    def autograph(self, name) -> None:
        print(f"With love to {name}, Jeresoft!")


class Bodyguard(ICelebrity):

    def __init__(self, celebrity: Celebrity) -> None:
        self._celebrity = celebrity

    def autograph(self, name) -> None:

        if self.check_access():
            self._celebrity.autograph(name)
            self.log_access()

    def check_access(self) -> bool:
        print("Bodyguard: Checking access prior to firing a real autograph.")
        return True

    def log_access(self) -> None:
        print("Bodyguard: Logging the time of autograph.", end="")


def client_code(subject: Celebrity, name) -> None:

    subject.autograph(name)


if __name__ == "__main__":
    print("Client: Executing the client code with a Celebrity:")
    real_subject = Celebrity()
    client_code(real_subject, 'Gigi')

    print("")

    print("Client: Executing the same client code with a Bodyguard:")
    bodyguard = Bodyguard(real_subject)
    client_code(bodyguard,'Joe')