import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
    return ( 
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>Default</Button>
            <Button variant="primary">
                Primary 
            </Button>
            <Button variant="primaryOutLine">
                Primary Outline
            </Button>
            <Button variant="secondary">
                Secondary 
            </Button>
            <Button variant="secondaryOutLine">
                Secondary Outline
            </Button>
            <Button variant="danger">
                danger 
            </Button>
            <Button variant="dangerOutLine">
                danger Outline
            </Button>
            <Button variant="super">
                super 
            </Button>
            <Button variant="superOutLine">
                super outline
            </Button>
            <Button variant="ghost">
                ghost 
            </Button>
            <Button variant="sidebar">
                sidebar 
            </Button>
            <Button variant="sidebarOutline">
                sidebar outline 
            </Button>
            
        </div>
     );
}
 
export default ButtonsPage;