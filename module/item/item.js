/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class TroikaItem extends Item {
    prepareData() {
        super.prepareData();
    }

    prepareDerivedData(){
        
        const item = this;
        
        item.system.displayName = item.name;
        item.system.attackTooltip = "";

        if(item.type === 'gear'){

            if(item.system.requiresTwoHands === true){
                item.system.displayName += "*";
                item.system.attackTooltip += "이 아이템은 적어도 양손으로 잡아야 합니다.\n"
            }

            if(item.system.armourIgnored > 0){
                item.system.displayName += "#";
                item.system.attackTooltip += `이 아이템은 ${item.system.armourIgnored} 만큼의 장갑을 관통합니다.`
            }

            //console.log(item);
        }
    }
}
