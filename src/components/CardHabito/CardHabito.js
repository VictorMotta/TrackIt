import {
    StyledContainerCardHabito,
    StyledContainerInfoHabito,
    StyledContainerCheckBox,
} from "./styled";
const CardHabito = () => {
    return (
        <StyledContainerCardHabito>
            <StyledContainerInfoHabito>
                <h1>Ler 1 Capitulo de livro</h1>
                <span>Sequência atual: 3 dias</span>
                <span>Seu recorde: 5 dias</span>
            </StyledContainerInfoHabito>
            <StyledContainerCheckBox>
                <ion-icon name='checkmark-outline'></ion-icon>
            </StyledContainerCheckBox>
        </StyledContainerCardHabito>
    );
};
export default CardHabito;
