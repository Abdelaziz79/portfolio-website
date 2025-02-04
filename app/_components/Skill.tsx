import { Card, CardContent } from "@/components/ui/card";

type Props = {
  skill: string;
};

export default function Skill({ skill }: Props) {
  return (
    <Card className="border border-border/50 hover:border-primary/50 transition-colors">
      <CardContent className="p-3 text-center" style={{ direction: "ltr" }}>
        {skill}
      </CardContent>
    </Card>
  );
}
