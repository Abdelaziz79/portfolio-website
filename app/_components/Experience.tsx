import { Experience as Exp } from "@/app/_types/types";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  exp: Exp;
  lang: "ar" | "en";
};

export default function Experience({ exp, lang }: Props) {
  return (
    <Card className="border border-border/50 hover:border-primary/50 transition-colors">
      <CardContent className="p-6 space-y-2">
        <h3 className="font-semibold">{exp.title[lang]}</h3>
        <p className="text-sm text-muted-foreground">
          {exp.company[lang]} • {exp.period[lang]}
        </p>
        <p className="text-sm leading-relaxed">{exp.description[lang]}</p>
      </CardContent>
    </Card>
  );
}
