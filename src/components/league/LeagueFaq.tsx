import FaqCard from "@/components/FaqCard";

export default function LeagueFaq() {
  return (
    <section
      className="w-full border-t border-white/10 pt-8 md:pt-10"
      aria-labelledby="league-faq-heading"
    >
      <div className="mb-5 md:mb-6">
        <h2
          id="league-faq-heading"
          className="text-h2 font-bold tracking-tight text-white"
        >
          Questions & Answers
        </h2>
      </div>

      <div className="md:columns-2 xl:columns-3 space-y-4">
        <FaqCard title="How do I create a football league?">
          <p>
            Hit &quot;Create Game&quot;, give it a name, and add your teams — as
            few as 2, up to 20 teams. Football Wheel automatically generates a
            full round-robin schedule so every team plays each other once. No
            setup headaches, no spreadsheets.
          </p>
        </FaqCard>

        <FaqCard title="Is Football Wheel free?">
          <p>
            Completely free. No premium plan, no ads in the way, no paywalled
            features. Create as many leagues as you want.
          </p>
        </FaqCard>

        <FaqCard title="What is round-robin format?">
          <p>
            Round-robin means every team plays against every other team exactly
            once. It&apos;s the fairest format for a mates league — no one gets
            a bye, no one gets lucky with the bracket. At the end, the table
            tells the truth.
          </p>
        </FaqCard>

        <FaqCard title="Does it track points, goals, and standings automatically?">
          <p>
            Yes. Enter the score for each match and the league table updates
            instantly — wins, draws, losses, goal difference, and total points,
            all sorted in real time just like a real league table.
          </p>
        </FaqCard>

        <FaqCard title="Do I need to create an account?">
          <p>
            No account, no email, no sign-up. Zero. Your league is created and
            stored directly in your browser. Just share the link with your mates
            and they can check the standings anytime.
          </p>
        </FaqCard>

        <FaqCard title="Is my data sent to any server?">
          <p>
            Never. Everything — your teams, fixtures, scores, and standings — is
            stored locally in your browser using local storage. Nothing is
            uploaded or shared with any server. Your league stays completely
            private.
          </p>
        </FaqCard>

        <FaqCard title="Can I access my league on a different device?">
          <p>
            Because your data is stored locally in your browser, it won&apos;t
            automatically sync to other devices. Bookmark it on the device
            you&apos;re using to keep easy access throughout the season.
          </p>
        </FaqCard>

        <FaqCard title="How many teams can I add to a league?">
          <p>
            20! Just like the Premiere League. Football Wheel works great for
            small groups (3–4 players) and scales up to larger tournaments. The
            more teams, the more fixtures — but the schedule is always generated
            instantly.
          </p>
        </FaqCard>

        <FaqCard title="Can I delete specific league from the leagues list?">
          <p>
            Yes. Click the Select button on the leagues list, tick the
            checkboxes next to the leagues you want to remove, then hit Delete.
            Only the selected leagues are deleted — all other leagues and
            fixtures remain untouched.
          </p>
        </FaqCard>

        <FaqCard title="What happens if I clear my browser data?">
          <p>
            Since everything is stored locally, clearing your browser&apos;s
            cache or site data will erase your league. We recommend not clearing
            site data for footballwheel.com while your season is active.
          </p>
        </FaqCard>
      </div>
    </section>
  );
}
